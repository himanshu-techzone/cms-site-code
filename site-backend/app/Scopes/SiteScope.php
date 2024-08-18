<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Session;

if (!defined('SUPER_ADMIN_ORG_ID'))
    define("SUPER_ADMIN_ORG_ID", 1);


class SiteScope implements \Illuminate\Database\Eloquent\Scope
{

    /** Org id attribute for the currently loggedin user */
    protected $site_id = null;

    //** Which field is to be used for org id */
    protected $site_id_field = null;


    public function __construct($site_id_field)
    {
        
        if(isset(Session::get('userorginfo')['site_id'])){
            $siteid = Session::get('userorginfo')['site_id'];
            $orgid = Session::get('userorginfo')['org_id'];
        }
        if(isset(Session::get('useradmin')['site_id'])){
            $siteid = Session::get('useradmin')['site_id'];
            $orgid = Session::get('useradmin')['org_id'];
        }
        //Superadmin should see all the records and hence do not add global scope
        if ($orgid == SUPER_ADMIN_ORG_ID) {
            // $this->org_id = ;
            // $this->org_id_field = null;
            
        } else {
           
            //This is not a superadmin hence add global scope
            $this->site_id = $siteid;
            $this->site_id_field = $site_id_field;
        }
    }
    public function apply(Builder $builder, Model $model)
    {
        //No such parameters found, skip query modification
        if ($this->site_id == null || $this->site_id_field == null) {
            return $builder;
        } else {
            //add the query suppliment to the curent query builder
            return $builder->where($this->site_id_field, '=', $this->site_id);
        }
    }

    //this is required as interface needs this method
    public function remove(Builder $builder, Model $model)
    {
    }
}
