<!-- buat box tanpa hrs buat css, dengan slot component -->

<div>
    <slot name="top" />
</div>

<div>
    <slot name="middle" />
</div>

<div>
    <slot name="bottom" />
</div>

<style>
    div {
        width: 500px;
        min-height: 300px;
        border: solid grey 1px;
    }
</style>
