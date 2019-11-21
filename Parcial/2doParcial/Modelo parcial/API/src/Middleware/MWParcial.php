<?php
namespace Middleware;

use Models\User;
use Helpers\VerificadorJWT;
use Slim\Http\Request;
use Slim\Http\Response;
use Controllers\UsuariosController;
class MWParcial 
{
    function MWLogin(Request $request,Response $response,$next)
    {
        $datos = $request->getParsedBody();
        $user = new User();
        $user->email = $datos['email'];
        $user->password = $datos['password'];
        $userValidado = $user->ValidarUserExistenteLogin();
        if($userValidado!=false)
        {
            $request = $request->withAttribute('user', $userValidado);
            $response = $next($request,$response);
        }
        else
        {
            return $response->withJson("El usuario o contraseña son incorrectos. Intentelo nuevamente.", 400);
        }
        return $response;
    }

    function MWVerificarToken(Request $request,Response $response,$next)
    {
        $token = $request->getHeader("token");
        try
        {
            VerificadorJWT::VerificarToken($token[0]);
            $response = $next($request,$response);
        }
        catch(\Exception $e)
        {
            return $response->withJson($e->getMessage(), 500);
        }
        return $response;
    }

    function MWVerificarCredenciales(Request $request,Response $response,$next)
    {
        $token = $request->getHeader('token')[0];
        $data = VerificadorJWT::TraerData($token);
        if($request->getUri()->getPath() == "Usuario/" && $request->getMethod() == "GET" && $request->getQueryParam("login") == "true")
        {
            $response = $next($request,$response);
            return $response;
        }
        switch($data->role)
        {
            case 1:
                if($request->getUri()->getPath() == "Inscriptions/" || $request->getUri()->getPath() == "Inscriptions/SubjectsByStudent" || $request->getUri()->getPath() == "Subject/" && $request->getMethod() == 'GET')
                {
                    $response = $next($request,$response);
                    return $response;
                }
                else
                {
                    return $response->withJson("No posees las credenciales necesarias para estas acciones", 403);
                }
            break;

            case 2:
                if($request->getUri()->getPath() == "Inscriptions/StudentBySubject" || $request->getUri()->getPath() == 'Subject/SubjectByTeacher')
                {
                    $response = $next($request,$response);
                    return $response;
                }
                else
                {
                    return $response->withJson("No posees las credenciales necesarias para estas acciones", 403);
                }
            break;

            case 3:
                if($request->getUri()->getPath() == "Subject/" || $request->getUri()->getPath() == "Usuario/")
                {
                    $response = $next($request,$response);
                    return $response;
                }
                else
                {
                    return $response->withJson("No posees las credenciales necesarias para estas acciones", 403);
                }
            break;

            default:
                return $response->withJson("No posees las credenciales necesarias para estas acciones", 403);
            break;
        }
        return $response;
    }

    function MWValidarAlta(Request $request,Response $response,$next)
    {
        $atributos = $request->getParsedBody();
        $user = new User();
        $user->email = $atributos["email"];
        $user->password = $atributos["password"];
        $user->type = $atributos["type"];
        if($user->ValidarUserExistenteLogin()==false)
        {
            $request = $request->withAttribute('user',$user);
            $response = $next($request,$response);
        }
        else
        {
            return $response->withJson("El tipo de usuario que quiere dar de alta ya existe en la base de datos", 400);
        }

        return $response;
    }

    function MWValidateExistingTeacher(Request $request,Response $response,$next)
    {
        $teacher = User::find($request->getParsedBody()["idProfesor"]);
        if ($teacher != NULL && $teacher->ValidateExistingTeacher())
        {
            $response = $next($request,$response);
            return $response;
        }
        else
        {
            return $response->withJson("El profesor no existe", 400);
        }
    }
}
?>