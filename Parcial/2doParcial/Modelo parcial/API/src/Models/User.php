<?php
namespace Models;
class User extends \Illuminate\Database\Eloquent\Model
{
  protected $table = "usuarios";
  public $timestamps = false;
  
  public static function LastInsertId()
  {
      return User::select("id")->orderBy("id", "desc")->first()->id;
  }
  public static function FindByUsername($nombre)
  {
     return User::where("nombre", $nombre)->first();
  }
  public static function FindByUsernameAndPassword($nombre, $clave)
  {
     return User::where("nombre", $nombre)->where("clave", $clave)->first();
  }

  public function ValidarUserExistenteLogin()
  {
      $users = self::all();
      foreach($users as $user)
      {
          if($user->email == $this->email && $user->password == $this->password)
          {
              return $user;
          }
      }
      return false;
  }

  public function ValidarUserExistenteAlta()
  {
      $users = self::all();
      foreach($users as $user)
      {
          if($user->email == $this->email && $user->type == $this->type)
          {
              return true;
          }
      }
      return false;
  }

  public function ValidateExistingTeacher()
  {
    $users = self::all();
    foreach($users as $user)
    {
        if($user->id == $this->id && $user->type == UserRoles::Profesor)
        {
            return true;
        }
    }
    return false;
  }

  public function subirFoto($archivos, $path)
  {
      $nombreFoto = ($archivos["foto"])->getClientFileName();
      $extension = explode(".",$nombreFoto);
      $extension = array_reverse($extension)[0];
      $titulo = ("Empleado_".$this->email."_".$this->type.'.'.$extension);
      $path .= $titulo;
      $archivos["foto"]->moveTo($path);
      return realpath($path);
  }
}

abstract class UserRoles 
{
   const Alumno = 1;
   const Profesor = 2;
   const Administrador = 3;
}