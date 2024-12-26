<?php

namespace App\Http\Controllers;

use App\Models\Payroll;
use App\Http\Requests\StorePayrollRequest;
use App\Http\Requests\UpdatePayrollRequest;
use App\Models\Employee;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PayrollController extends Controller
{
    public function index()
    {
        $payrolls = Payroll::with('employee')->latest()->get(); // Ambil semua data payroll dengan relasi employee
        return Inertia::render('Payrolls/Index', [
            'payrolls' => $payrolls,
        ]);
    }

    public function create()
    {
        $employees = Employee::all(); // Ambil semua karyawan
        return Inertia::render('Payrolls/Create', [
            'employees' => $employees, // Kirim data karyawan ke tampilan
        ]);
    }

    public function store(StorePayrollRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;

        if ($image) {
            $data['image'] = $image->store('payrolls/' . Str::random(), 'public');
        }

        Payroll::create($data);
        return redirect()->route('payrolls.index')->with('success', 'Payroll record created successfully.');
    }

    public function show(Payroll $payroll)
    {
        return Inertia::render('Payrolls/Show', [
            'payroll' => $payroll->load('employee'),
        ]);
    }

    public function edit(Payroll $payroll)
    {
        $employees = Employee::all(); 
        return Inertia::render('Payrolls/Edit', [
            'payroll' => $payroll,
            'employees' => $employees, 
        ]);
    }


    public function update(UpdatePayrollRequest $request, Payroll $payroll)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if($image){
            if($payroll->image){
                Storage::disk('public')->deleteDirectory(dirname($payroll->image));
            }
            $data['image'] = $image->store('payrolls/' . Str::random(), 'public');
        }else{
            $data['image'] = $payroll->image;
        }

     
        $payroll->update($data);

        return redirect()->route('payrolls.index')->with('success', 'Payroll record updated successfully.');
    }

    public function destroy(Payroll $payroll)
    {

        if ($payroll->image) {
            Storage::disk('public')->deleteDirectory(dirname($payroll->image));
        }
        $payroll->delete();
        return redirect()->route('payrolls.index')->with('success', 'Payroll record deleted successfully.');
    }
}
