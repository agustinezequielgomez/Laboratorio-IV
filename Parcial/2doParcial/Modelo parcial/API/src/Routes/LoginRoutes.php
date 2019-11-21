<?php
namespace Routes;
use Controllers\UsuariosController;
use Middleware\MWParcial;
use Slim\App;
return function(App $app) 
{
    $app->group('/Login', function()
    {
        $this->post('/',UsuariosController::class.':Login')->add(MWParcial::class.':MWLogin');
    });

    $app->group('/Register', function()
    {
        $this->post('/', UsuariosController::class.':Register')->add(MWParcial::class.':MWValidarAlta');
    });
}
?>