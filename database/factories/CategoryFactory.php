<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Branch;
use App\Category;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Category::class, function (Faker $faker) {
    $categoryName = $faker->words(2, true);

    return [
        'name' => $categoryName,
        'slug' => Str::slug($categoryName),
        'branch_id' => Branch::all()->random(),
    ];
});
