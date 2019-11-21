<?php
namespace Routes;
use Controllers\InscriptionsController;
use Middleware\MWParcial;
use Slim\App;
return function(App $app) 
{
    $app->group('/Inscriptions', function()
    {
        $this->get('/SubjectsByStudent', InscriptionsController::class.':GetSubjectsByStudent');
        $this->get('/StudentBySubject', InscriptionsController::class.':GetSubjectsByTeacher');
        $this->post('/',InscriptionsController::class.':Alta');
    })->add(MWParcial::class.':MWVerificarCredenciales')->add(MWParcial::class.':MWVerificarToken');;
}
?>