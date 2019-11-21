<?php
namespace Controllers;
use Models\Inscriptions;
use Slim\Http\Request;
use Helpers\VerificadorJWT;
use Slim\Http\Response;
use Models\Subject;
use Controllers\SubjectController;
use Models\User;

class InscriptionsController
{
  public static function traerTodos($request, $response, $args)
  {
    return json_encode(Inscriptions::all());  
  }

  public static function traerPorId($request, $response, $args)
  {
    return (Inscriptions::find($args['id']))->toJson();
  }

  public static function GetSubjectsByStudent(Request $request,Response $response, $args) 
  {
    $idStudent = VerificadorJWT::TraerData($request->getHeader('token')[0])->id;
    $inscriptionSubjects = Inscriptions::where('id_alumno', '=', $idStudent)->get();
    $subjects = [];
    foreach($inscriptionSubjects as $inscriptionSubject)
    {
        array_push($subjects, Subject::where('id', '=', $inscriptionSubject->id_materia)->first());
    }

    if(count($subjects) == 0)
    {
        return $response->withJson("No estas inscripto a ninguna materia", 404);
    }
    return $response->withJson($subjects, 200);
  }

  public static function GetSubjectsByTeacher(Request $request,Response $response, $args)
  {
      $idTeacher = VerificadorJWT::TraerData($request->getHeader('token')[0])->id;
      $teacherSubjects = Subject::where('idProfesor', '=', $idTeacher)->get();
      if(count($teacherSubjects) == 0)
      {
        return $response->withJson("No estas a cargo de ninguna materia", 404);
      }
      $inscriptions = [];
      foreach($teacherSubjects as $teacherSubject)
      {
          $inscription = new Inscriptions();
          $inscription = Inscriptions::where('id_materia', '=', $teacherSubject->id)->get();
          foreach($inscription as $student)
          {
            array_push($inscriptions, $student);
          }
      }
      if(count($inscriptions) == 0)
      {
        return $response->withJson("No hay alumnos inscriptos a tu materia", 404);
      }
      $students = [];
      foreach($inscriptions as $inscriptionSubject)
      {
        array_push($students, User::where('id', '=', $inscriptionSubject->id_alumno)->first());
      }
      return $response->withJson($students, 200);
  }

  function Alta(Request $request,Response $response, $args)
  {
      $attributes = $request->getParsedBody();
      $idStudent = VerificadorJWT::TraerData($request->getHeader('token')[0])->id;
      $inscription = new Inscriptions();
      $inscription->id_alumno = $idStudent;
      $inscription->id_materia = $attributes["idSubject"];
      $inscription->save();
      $materia = Subject::find($attributes["idSubject"]);
      $materia->cupos -= 1;
      $materia->update();
      return $response->withJson("Materia dada de alta exitosamente", 200);
  }
}
?>