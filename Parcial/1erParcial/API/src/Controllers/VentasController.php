<?php

namespace Controllers;

use Models\Ventas;
use Helpers\JWTAuth;
use Helpers\AppConfig as Config;
use Helpers\FilesHelper as Files;
use Helpers\ImagesHelper as Images;
use Illuminate\Support\Facades\DB;
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Capsule\Manager as Capsule;

class VentasController
{
  public static function traerTodos(Request $request, Response $response, $args)
  {
    return json_encode(Ventas::all());  
  }

  public static function traerPorId(Request $request, Response $response, $args)
  {
    $id = $request->getAttributes()["id"];
    $venta = Ventas::find($id);
    if($venta)
    {
      return json_encode($venta);  
    }
    else
    {
      $responseObj = ["message" => "venta no encontrada"];
      return $response->withJson(json_encode($responseObj), 401);
    }
  }

  public static function Create(Request $request, Response $response, $args)
  {
    $data = $request->getParsedBody(); 
    $venta = new Ventas;
    $venta->id_producto = $data["id"];
    $venta->cantidad = $data["cantidad"];
    $venta->fechaDeVenta = $data["fechaDeVenta"];
    $venta->save();

    return $response->withJson(true);
  }

  public static function Update(Request $request, Response $response, $args)
  {
    $data = $request->getParsedBody();
    $venta = Ventas::find($args["id"]);
    if(!$venta)
    {
      return $response->withJson("producto inexistente", 200);
    }
    $venta->id_producto = $data["id"];
    $venta->cantidad = $data["cantidad"];
    $venta->fechaDeVenta = $data["fechaDeVenta"];
    $venta->save();

    return $response->withJson("producto actualizado", 200);
  }

  public static function Delete(Request $request, Response $response, $args)
  {
    if(!isset($args["id"]))
    {
      return $response->withJson("debe especificar id", 400);
    }
    $producto = Ventas::find($args["id"]);
    if(!$producto)
    {
      return $response->withJson("producto inexistente", 200);
    }
    $producto->delete();
    return $response->withJson("producto eliminado");
  }
}