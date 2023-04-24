function FormContent() {
  return (
    <form action="">
      <div class="mb-3">
        <label for="long_url" class="form-label">Enter a long URL to make a TinyURL</label>
        <input type="text" class="form-control shadow-none" id="long_url" />
      </div>

      <div class="mb-3">
        <label for="long_url" class="form-label">Customize your link</label>
        <div className="row">
          <div className="col-md-7">
            <input type="text" class="form-control shadow-none" id="long_url" placeholder="Ex: https://tinyurl.com" />
          </div>
          <div className="col-md-5">
            <input type="text" class="form-control shadow-none" id="long_url" placeholder="alias" />
          </div>
        </div>
      </div>

      <div class="d-grid gap-1 mt-4">
        <button type="submit" class="btn btn-success p-2">Make TinyURL</button>
      </div>
    </form>
  );
}

export default FormContent;
