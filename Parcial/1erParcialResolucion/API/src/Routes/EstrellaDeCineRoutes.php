<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;
use Controllers\EstrellaDeCineController;
return function(App $app)
{
  $app->group('/EstrellaDeCine', function()
  {
    $this->get('/', EstrellaDeCineController::class . ':traerTodos'); 
    $this->get('/{id}', EstrellaDeCineController::class . ':traerPorId');
    $this->post('/', EstrellaDeCineController::class . ':Create');
    $this->post('/{id}', EstrellaDeCineController::class . ':Update');
    $this->delete('/{id}', EstrellaDeCineController::class . ':Delete');
  });
};
?>