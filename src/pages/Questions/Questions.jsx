import './Questions.css';
import SmartIcon from '../../components/Icons/SmartIcon';
import Tools from '../../components/Icons/Tools';
import Work from '../../components/Icons/Work';
import Buildings from '../../components/Icons/Buildings';

function Questions() {
  return (
    <section id="preguntas" className="questions">
      <img
        src="/background.jpg"
        className="service-img"
        alt="Fondo de preguntas frecuentes"
      />
      <div className="questions-grid">
        <div className="question-card">
          <div className="question-card-icon">
            <SmartIcon />
          </div>
          <div>
            <span className="mb-5">¿Qué es una casa inteligente?</span>
            <p>
              Es tomar el control de los distintos sub-sistemas de la vivienda
              desde un solo aplicativo, mediante módulos de control o
              dispositivos móviles (smartphone, tablet, etc.) pudiendo
              interactuar entre sí y generar eventos autónomos.
            </p>
          </div>
        </div>
        <div className="question-card">
          <div className="question-card-icon">
            <Tools />
          </div>
          <div>
            <span>
              ¿Puedo transformar mi casa actual en una casa inteligente?
            </span>
            <p>
              Sí. Las soluciones que Innova Home ofrece permiten incorporar
              inteligencia en viviendas existentes y habitadas sin necesidad de
              modificaciones estructurales.
            </p>
          </div>
        </div>
        <div className="question-card">
          <div className="question-card-icon">
            <Work />
          </div>

          <div>
            <span>¿Ustedes venden productos o la instalación?</span>
            <p>
              Nosotros ofrecemos el producto, la instalación y el servicio
              postventa. No vendemos productos, ofrecemos una solución integral
              a la necesidad que tengan.
            </p>
          </div>
        </div>
        <div className="question-card">
          <div className="question-card-icon">
            <Buildings />
          </div>
          <div>
            <span>¿Se pueden realizar los trabajos por etapas?</span>
            <p>
              Sí! Se puede dejar la obra preparada para una domótica completa y
              luego ir integrando por etapas según las necesidades de cada
              cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
