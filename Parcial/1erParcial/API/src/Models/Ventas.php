<?php
namespace Models;
use Illuminate\Database\Eloquent\Model;
use Helpers\AppConfig as Config;
use Illuminate\Database\Capsule\Manager as Capsule;
class Ventas extends Model
{
  protected $table = "ventas";
  public $timestamps = false;
  
  public static function LastInsertId()
  {
      return Ventas::select("id")->orderBy("id", "desc")->first()->id;
  }

  public static function FindByDescription($description)
  {
     return Ventas::where("descripcion", "LIKE" , "%".$description."%")->get();
  }
}
?>