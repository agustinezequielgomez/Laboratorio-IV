<?php
namespace Controllers;
use Models\User;
use Helpers\VerificadorJWT;
use Slim\Http\Request;
use Slim\Http\Response;
class UsuariosController
{
  public static function traerTodos($request, $response, $args)
  {
    return json_encode(User::all());  
  }
  public static function traerPorId($request, $response, $args)
  {
    return (User::find($args['id']))->toJson();
  }

  function Login(Request $request,Response $response, $args)
  {
      $user = $request->getAttribute('user');
      return $response->withJson(VerificadorJWT::crearToken(["id"=>$user->id,"email"=>$user->email,"role"=>$user->type]), 200);
  }

  function Register(Request $request,Response $response, $args)
  {
    $user = $request->getAttribute('user');
    $user->path = $user->subirFoto($request->getUploadedFiles(), './public/img/Users/');
    $user->save();
    return $response->withJson('Empleado dado de alta con exito', 200);
  }

  function GetTeachers(Request $request,Response $response, $args)
  {
    return json_encode(User::where('type', '=', '2')->get());
  }
}
?>