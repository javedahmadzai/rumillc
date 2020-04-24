<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) use ($factory) {
    return [
        'name'        => $faker->word,
        'slug'        => $faker->slug,
        'price'       => $faker->numberBetween(1000, 20000),
        'tags'        => $faker->word,
        'content'     => $faker->text(500),
        'category_id' => App\Category::all()->random(),
    ];
});
