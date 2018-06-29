<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class FormController extends Controller
{
    public function store(Request $request) {

    	// Validation
    	$ukPhonePattern = '/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/';
        $this->validate($request, [
            'firstname' => 'required|max:50',
            'lastname' => 'required|max:50',
            'email' => 'required|email|max:50',
            'telephone' => ['required', 'regex:' . $ukPhonePattern],
            'gender' => 'required|max:10',
            'datebritch' => 'required|max:10',
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


	    return redirect()->back()->with('message', 'Your information has been submitted successfully.');

    }
}
