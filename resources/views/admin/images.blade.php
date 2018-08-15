@extends('layouts.admin')

@section('panel')

    @if (session('status'))
        <div class="notification is-success">
            <button class="delete" onclick="this.parentElement.style.display='none';"></button>
            {{ session('status') }}
        </div>
    @endif

    <div class="section has-background-white-bis">
        <form method="POST" action="/api/images" enctype="multipart/form-data">
            @csrf

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="title" class="label">Title</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" name="title" id="title" value="{{ old('title') }}" class="input">
                        </div>
                        @if ($errors->has('title'))
                            <p class="help is-danger">{{ $errors->first('title') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="type" class="label">Category</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <div class="select">
                                <select name="type" id="type">
                                    <option value="s">Slider</option>
                                    <option value="g">Gallery</option>
                                    <option value="o" selected>Other</option>
                                </select>
                            </div>
                            @if ($errors->has('type'))
                                <p class="help is-danger">{{ $errors->first('type') }}</p>
                            @endif
                        </div>
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label for="image" class="label">Image</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <label class="file-label">
                                <input class="file-input" type="file" name="image" id="image">
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                            </label>
                        </div>
                        @if ($errors->has('image'))
                            <p class="help is-danger">{{ $errors->first('image') }}</p>
                        @endif
                    </div>
                </div>
            </div>

            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button class="button is-link">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="section">
        <div class="tabs">
            <ul>
                <li class="{{ app('request')->input('type') ? '' : 'is-active' }}"><a href="images">All</a></li>
                <li class="{{ app('request')->input('type') == 's' ? 'is-active' : '' }}"><a href="images?type=s">Slider</a></li>
                <li class="{{ app('request')->input('type') == 'g' ? 'is-active' : '' }}"><a href="images?type=g">Gallery</a></li>
                <li class="{{ app('request')->input('type') == 'o' ? 'is-active' : '' }}"><a href="images?type=o">Other</a></li>
            </ul>
        </div>

        @foreach ($images->chunk(3) as $chunk)
            <div class="columns">
                @foreach ($chunk as $image)
                    <div class="column is-one-third">
                        <div class="card">
                            <div class="card-header">
                                <p class="card-header-title">
                                    {{ str_limit($image->title, 15, "...") }}
                                </p>
                                <a href="images/{{$image->id}}/edit" class="card-header-icon"><i class="icon far fa-edit"></i></a>
                                <form method="POST" action="/api/images/{{ $image->id }}" class="card-header-icon">
                                    @csrf
                                    @method('delete')
                                    <a href="#" onclick="this.parentElement.submit();"><i class="icon far fa-trash-alt"></i></a>
                                </form>
                            </div>
                            <div class="card-image">
                                <figure class="image">
                                    <img src="{{ $image->url }}" alt="{{ $image->title }}">
                                </figure>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
@endsection
