<?php

namespace Controllers;

use Models\Peliculas;
use Helpers\JWTAuth;
use Helpers\AppConfig as Config;
use Helpers\FilesHelper as Files;
use Helpers\ImagesHelper as Images;
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Capsule\Manager as Capsule;

class PeliculasController
{
  public static function traerTodos(Request $request, Response $response, $args)
  {
    return json_encode(Peliculas::all());  
  }
  public static function traerPorId(Request $request, Response $response, $args)
  {
    $id = $request->getAttributes()["id"];
    $producto = Peliculas::find($id);
    if($producto)
    {
      $responseObj = ["message" => "producto encontrado", "producto" => $producto];
      //return $response->withJson(json_encode($responseObj), 200);
      return json_encode($producto);  
    }
    else
    {
      $responseObj = ["message" => "producto no encontrada"];
      return $response->withJson(json_encode($responseObj), 401);
    }
  }

  public static function traerPorDescricion(Request $request, Response $response, $args)
  {
    $descripcion = $request->getAttribute('descripcion');
    $producto = Peliculas::FindByDescription($descripcion);
    if($producto->count() > 0)
    {
      return json_encode($producto);
    }
    else
    {
      return json_encode("No se encontro el producto que se esta buscando");
    }
  }

  public static function Create(Request $request, Response $response, $args)
  {
    $data = $request->getParsedBody(); 
    $pelicula = new Peliculas;
    $pelicula->nombre = $data["nombre"];
    $pelicula->tipo = $data["tipo"];
    $pelicula->fechaDeEstreno = $data["fechaDeEstreno"];
    $pelicula->cantidadDePublico = $data["cantidadDePublico"];
    $pelicula->rutaDeFoto = $data["rutaDeFoto"];
    $pelicula->idEstrella = $data["idEstrella"];
    $pelicula->save();

    return $response->withJson(true);
  }

  public static function Update(Request $request, Response $response, $args)
  {
    $data = $request->getParsedBody();
    $pelicula = Peliculas::find($args["id"]);
    if(!$pelicula)
    {
      return $response->withJson("pelicula inexistente", 200);
    }
    $pelicula->descripcion = $data["nombre"];
    $pelicula->tipo = $data["tipo"];
    $pelicula->fechaDeVencimiento = $data["fechaDeEstreno"];
    $pelicula->precio = $data["cantidadDePublico"];
    $pelicula->rutaDeFoto = $data["path"];
    $pelicula->save();

    return $response->withJson("pelicula actualizado", 200);
  }

  public static function Delete(Request $request, Response $response, $args)
  {
    if(!isset($args["id"]))
    {
      return $response->withJson("debe especificar id", 400);
    }
    $pelicula = Peliculas::find($args["id"]);
    if(!$pelicula)
    {
      return $response->withJson("pelicul$pelicula inexistente", 200);
    }
    $pelicula->delete();
    return $response->withJson("pelicul$pelicula eliminado");
  }

  public static function fileUpload(Request $request, Response $response, $args)
  {
    $path = './public/img/';
    $archivos = $request->getUploadedFiles();
    $nombreFoto = ($archivos["foto"])->getClientFileName();
    $extension = explode(".",$nombreFoto);
    $nombre = $extension[0];
    $extension = array_reverse($extension)[0];
    $titulo = ($nombre.'.'.$extension);
    $path .= $titulo;
    $archivos["foto"]->moveTo($path);
  }

}