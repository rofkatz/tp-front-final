import './Services.css';

function Services() {
  return (
    <section id="servicios" class="services">
      <h2 class="mb-4">¿Qué servicios te ofrecemos en Innova Home?</h2>
      <span className="mb-4 fs-5">
        Nos encargamos de la instalación y configuración de servicios como ser
        la automatización de tus puertas y ventanas, la climatización de tu
        casa, del riego inteligente de tu jardin, de la iluminación y control de
        tus electrodomésticos
      </span>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide w-75 h-50"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              height="500px"
              src="/smart-garden.jpeg"
              class="d-block w-100 service-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="service-image-title">Riego inteligente</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              height="500px"
              src="/electrodomesticos.jpeg"
              class="d-block w-100 service-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="service-image-title">
                Automatización de electrodomésticos
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              height="500px"
              src="/puertas-ventanas.jpeg"
              class="d-block w-100 service-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="service-image-title">
                Automatización de puertas y ventanas
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              height="500px"
              src="/luces.jpeg"
              class="d-block w-100 service-img"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="service-image-title">Iluminación</h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Services;
