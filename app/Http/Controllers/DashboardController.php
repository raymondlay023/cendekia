<?php

namespace App\Http\Controllers;

use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia('Dashboard');
    }
}
