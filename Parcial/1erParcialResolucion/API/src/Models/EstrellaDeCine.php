<?php
namespace Models;
use Illuminate\Database\Eloquent\Model;
use Helpers\AppConfig as Config;
use Illuminate\Database\Capsule\Manager as Capsule;
class EstrellaDeCine extends Model
{
  protected $table = "estrelladecine";
  public $timestamps = false;
  
  public static function LastInsertId()
  {
      return EstrellaDeCine::select("id")->orderBy("id", "desc")->first()->id;
  }

  public static function FindByDescription($description)
  {
     return EstrellaDeCine::where("descripcion", "LIKE" , "%".$description."%")->get();
  }
}
?>