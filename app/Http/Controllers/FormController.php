<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\User;

class FormController extends Controller
{
    public function store(Request $request) {

    	// Validation
    	$ukPhonePattern = '/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/';
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|max:30',
            'lastname' => 'required|max:30',
            'email' => 'required|email|max:30',
            'telephone' => ['required', 'regex:' . $ukPhonePattern],
            'gender' => 'required|max:10',
            'datebritch' => 'required|max:10',
            'comments' => 'max:200',
        ]);

        $user = new User();
        $user->firstname = $request['firstname'];
        $user->lastname = $request['lastname'];
        $user->email = $request['email'];
        $user->telephone = $request['telephone'];
        $user->gender = $request['gender'];
        $user->datebritch = $request['datebritch'];
        $user->comments = $request['comments'];
	    $user->save();

        if($validator->fails())
        {
            return response()->json(['errors'=>$validator->errors()]);
        }
        else
        {
            return response()->json(['message' => ['Your information has been submitted successfully.']], 200);
        }

    }
}
