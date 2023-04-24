import Header from "./components/Header";
import FormContent from "./components/FormContent";

function App() {
  return (
    <div className="container">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-md-6">
          <Header />
          <div className="content">
            <div class="card">
              <div class="card-body">
                <FormContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
