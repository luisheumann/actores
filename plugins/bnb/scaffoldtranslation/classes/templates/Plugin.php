<?php namespace BnB\ScaffoldTranslation\Classes\Templates;

use BnB\ScaffoldTranslation\Classes\TemplateBase;

class Plugin extends TemplateBase
{

    /**
     * @var array A mapping of stub to generated file.
     */
    protected $fileMap = [
        'plugin/plugin.stub'  => '{{lower_author}}/{{lower_name}}/Plugin.php',
        'plugin/version.stub' => '{{lower_author}}/{{lower_name}}/updates/version.yaml',
    ];
}