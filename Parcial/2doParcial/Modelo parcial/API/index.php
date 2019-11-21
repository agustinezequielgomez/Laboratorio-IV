<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Helpers\AppConfig;

require __DIR__.'/vendor/autoload.php';

$config = ['settings' => ['displayErrorDetails' => true]];

$app = new \Slim\App($config);

$app->add(function ($req, $res, $next) {
    $res = $res->withHeader('Access-Control-Allow-Origin', '*');
    $res = $res->withHeader('Access-Control-Allow-Methods', $req->getHeaderLine('Access-Control-Request-Method'));
    $res = $res->withHeader('Access-Control-Allow-Headers', $req->getHeaderLine('Access-Control-Request-Headers'));

    return $next($req, $res);
});

$capsule = new Capsule;
$capsule->addConnection(AppConfig::$illuminateDb);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$LoginRoutes = require __DIR__.'/src/Routes/LoginRoutes.php';
$LoginRoutes($app);

$SubjectRoutes = require __DIR__.'/src/Routes/SubjectRoutes.php';
$SubjectRoutes($app);

$InscriptionRoutes = require __DIR__.'/src/Routes/InscriptionRoutes.php';
$InscriptionRoutes($app);

$UsuarioRoutes = require __DIR__.'/src/Routes/UsuarioRoutes.php';
$UsuarioRoutes($app);


$app->run();
