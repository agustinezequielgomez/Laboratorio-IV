<?php
namespace Controllers;
use Models\Subject;
use Helpers\VerificadorJWT;
use Slim\Http\Request;
use Slim\Http\Response;
class SubjectController
{
  public static function GetAll($request, $response, $args)
  {
    return json_encode(Subject::all());  
  }

  public static function traerPorId($request, $response, $args)
  {
    return (Subject::find($args['id']))->toJson();
  }

  function Alta(Request $request,Response $response, $args)
  {
      $attributes = $request->getParsedBody();
      $subject = new Subject();
      $subject->nombre = $attributes["nombre"];
      $subject->cuatrimestre = $attributes["cuatrimestre"];
      $subject->idProfesor = $attributes["idProfesor"];
      $subject->cupos = $attributes["cupos"];
      $subject->save();
      return $response->withJson("Materia dada de alta exitosamente", 200);
  }

  public static function GetSubjectByTeacher(Request $request,Response $response, $args)
  {
      $idTeacher = VerificadorJWT::TraerData($request->getHeader('token')[0])->id;
      $subjects = Subject::where('idProfesor', '=', $idTeacher)->get();
      if (count($subjects) == 0)
      {
        return $response->withJson("No estas a cargo de ninguna materia", 404);
      }
      return $response->withJson($subjects, 200);
  }
}
?>