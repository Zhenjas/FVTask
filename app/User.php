<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    protected $fillable = [
        'firstname', 'lastname', 'email', 'telephone', 'gender', 'datebritch', 'comments',
    ];

}
