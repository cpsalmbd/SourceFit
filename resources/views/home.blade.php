<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __('Source Fit - Coding Exam') }}</title>
    @viteReactRefresh
    @if(App::environment('production'))
        @php
            $files = scandir(public_path()."/build/assets/");
            $css = $files[2];
            $script = $files[3];
        @endphp
        <link rel="stylesheet" href="{{ asset('build/assets') }}/{{ $css }}">
    @endif
    @if(App::environment('local'))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>
<body>
    <div id="app"></div>

    @if(App::environment('production'))
        <script src="{{ asset('build/assets') }}/{{ $script }}" defer></script>
    @endif
</body>
</html>
