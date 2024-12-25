<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Http\Requests\StoreAttendanceRequest;
use App\Http\Requests\UpdateAttendanceRequest;
use Inertia\Inertia;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attendances = Attendance::with('employee')->get(); // Retrieve all attendance records with employee data
        return Inertia::render('Attendances/Index', [
            'attendances' => $attendances,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Attendances/Create'); // Render the form for creating a new attendance record
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAttendanceRequest $request)
    {
        Attendance::create($request->validated()); // Create a new attendance record with validated data
        return redirect()->route('attendances.index')->with('success', 'Attendance record created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Attendance $attendance)
    {
        return Inertia::render('Attendances/Show', [
            'attendance' => $attendance->load('employee'), // Show attendance details with employee data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Attendance $attendance)
    {
        return Inertia::render('Attendances/Edit', [
            'attendance' => $attendance, // Render the form for editing the attendance record
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAttendanceRequest $request, Attendance $attendance)
    {
        $attendance->update($request->validated()); // Update the attendance record with validated data
        return redirect()->route('attendances.index')->with('success', 'Attendance record updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Attendance $attendance)
    {
        $attendance->delete(); // Delete the attendance record
        return redirect()->route('attendances.index')->with('success', 'Attendance record deleted successfully.');
    }
}
