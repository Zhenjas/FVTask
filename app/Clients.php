<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    protected $fillable = [
        'firstname', 'lastname', 'email', 'telephone', 'gender', 'birthday', 'comments',
    ];
}
