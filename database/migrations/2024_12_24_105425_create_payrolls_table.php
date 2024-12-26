<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payrolls', function (Blueprint $table) {
            $table->uuid('id')->primary(); // Definisikan kolom id sebagai UUID dan primary key
            $table->foreignUuid('employee_id')->constrained()->onUpdate("cascade")->onDelete("cascade");
            $table->string('month');
            $table->integer('year');
            $table->decimal('amount', 10, 2);
            $table->string('image')->nullable(); // Kolom untuk menyimpan nama file gambar
            $table->timestamps();
        });
     
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payrolls');
    }
};
