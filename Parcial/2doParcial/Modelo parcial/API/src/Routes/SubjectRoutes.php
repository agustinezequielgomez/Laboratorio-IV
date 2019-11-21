<?php
namespace Routes;
use Controllers\SubjectController;
use Middleware\MWParcial;
use Slim\App;
return function(App $app) 
{
    $app->group('/Subject', function()
    {
        $this->get('/', SubjectController::class.':GetAll');
        $this->post('/', SubjectController::class.':Alta')->add(MWParcial::class.':MWValidateExistingTeacher');
        $this->get('/SubjectByTeacher', SubjectController::class.':GetSubjectByTeacher');
    })->add(MWParcial::class.':MWVerificarCredenciales')->add(MWParcial::class.':MWVerificarToken');;
}
?>