<?php

namespace Controllers;

use Models\Productos;
use Helpers\JWTAuth;
use Helpers\AppConfig as Config;
use Helpers\FilesHelper as Files;
use Helpers\ImagesHelper as Images;
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Capsule\Manager as Capsule;

class ProductosController
{
  public static function traerTodos(Request $request, Response $response, $args)
  {
    return json_encode(Productos::all());  
  }
  public static function traerPorId(Request $request, Response $response, $args)
  {
    $id = $request->getAttributes()["id"];
    $producto = Productos::find($id);
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
    $producto = Productos::FindByDescription($descripcion);
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
    $producto = new Productos;
    $producto->descripcion = $data["descripcion"];
    $producto->tipo = $data["tipo"];
    $producto->fechaDeVencimiento = $data["fechaDeVencimiento"];
    $producto->precio = $data["precio"];
    $producto->rutaDeFoto = $data["rutaDeFoto"];
    $producto->save();

    return $response->withJson(true);
  }

  public static function Update(Request $request, Response $response, $args)
  {
    $data = $request->getParsedBody();
    $producto = Productos::find($args["id"]);
    if(!$producto)
    {
      return $response->withJson("producto inexistente", 200);
    }
    $producto->descripcion = $data["descripcion"];
    $producto->tipo = $data["tipo"];
    $producto->fechaDeVencimiento = $data["fechaDeVencimiento"];
    $producto->precio = $data["precio"];
    $producto->rutaDeFoto = $data["path"];
    $producto->save();

    return $response->withJson("producto actualizado", 200);
  }

  public static function Delete(Request $request, Response $response, $args)
  {
    if(!isset($args["id"]))
    {
      return $response->withJson("debe especificar id", 400);
    }
    $producto = Productos::find($args["id"]);
    if(!$producto)
    {
      return $response->withJson("producto inexistente", 200);
    }
    $producto->delete();
    return $response->withJson("producto eliminado");
  }

  public static function fileUpload(Request $request, Response $response, $args)
  {
    $path = './public/img';
    $archivos = $request->getUploadedFiles();
    $nombreFoto = ($archivos["foto"])->getClientFileName();
    $extension = explode(".",$nombreFoto);
    $extension = array_reverse($extension)[0];
    $titulo = ("TEST".'.'.$extension);
    $path .= $titulo;
    $archivos["foto"]->moveTo($path);
  }

}