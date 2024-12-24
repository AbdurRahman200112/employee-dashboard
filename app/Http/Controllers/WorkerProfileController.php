<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkerProfileController extends Controller
{
    public function getWorkerRules()
    {
        // Directly fetch data from the table
        $workers = DB::table('worker_profiles')->get();
        return response()->json($workers);
    }

    public function saveWorkerRules(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'workerType' => 'required|string',
            'breakRule' => 'required|string',
            'breakDuration' => 'required|numeric',
            'saturdayWorking' => 'required|boolean',
            'overtimeRules' => 'required|array',
        ]);

        // Insert the validated data into the table
        $workerId = DB::table('worker_profiles')->insertGetId([
            'worker_type' => $validated['workerType'],
            'break_rule' => $validated['breakRule'],
            'break_duration' => $validated['breakDuration'],
            'saturday_working' => $validated['saturdayWorking'],
            'overtime_rules' => json_encode($validated['overtimeRules']), // Store array as JSON
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Fetch the newly created worker profile
        $worker = DB::table('worker_profiles')->where('id', $workerId)->first();

        return response()->json(['message' => 'Worker profile created successfully', 'worker' => $worker]);
    }
}
