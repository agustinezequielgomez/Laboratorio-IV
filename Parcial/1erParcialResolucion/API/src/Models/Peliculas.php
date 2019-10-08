<?php
namespace Models;
use Illuminate\Database\Eloquent\Model;
use Helpers\AppConfig as Config;
use Illuminate\Database\Capsule\Manager as Capsule;
class Peliculas extends Model
{
  protected $table = "peliculas";
  public $timestamps = false;
  
  public static function LastInsertId()
  {
      return Peliculas::select("id")->orderBy("id", "desc")->first()->id;
  }
  public static function FindByDescription($description)
  {
     return Peliculas::where("nombre", "LIKE" , "%".$description."%")->get();
  }
}
?>