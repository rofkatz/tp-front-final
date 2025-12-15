import { useState } from 'react'
import './Contact.css'

function Contact(){
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        motivo: '',
        mensaje: '',
        newsletter: false
    })
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Save to localStorage
        const existingData = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
        const newSubmission = { ...formData, date: new Date().toISOString() }
        localStorage.setItem('contactSubmissions', JSON.stringify([...existingData, newSubmission]))

        // Show success toast
        setToast({ show: true, message: '¡Mensaje enviado con éxito!', type: 'success' })
        
        // Reset form
        setFormData({
            nombre: '',
            telefono: '',
            email: '',
            motivo: '',
            mensaje: '',
            newsletter: false
        })

        // Hide toast after 3 seconds
        setTimeout(() => setToast({ ...toast, show: false }), 3000)
    }

    const handleReset = () => {
        setFormData({
            nombre: '',
            telefono: '',
            email: '',
            motivo: '',
            mensaje: '',
            newsletter: false
        })
    }

    return (
     <section id="contacto" className="contact">
        <h2 className="mb-4 mt-5">Contacto</h2>
        <form className="contact-card" onSubmit={handleSubmit}>
            <input 
                className="contact-input" 
                type="text" 
                name="nombre"
                placeholder="Nombre" 
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <input 
                className="contact-input" 
                type="tel" 
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
            />
            <input 
                className="contact-input" 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
            />
            
            <select 
                className="contact-input contact-select"
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
            >
                <option value="" disabled>Motivo de contacto</option>
                <option value="presupuesto">Solicitar Presupuesto</option>
                <option value="informacion">Más Información</option>
                <option value="soporte">Soporte Técnico</option>
                <option value="otro">Otro</option>
            </select>

            <textarea 
                rows="3" 
                className="contact-input message-input" 
                name="mensaje"
                placeholder="Mensaje"
                value={formData.mensaje}
                onChange={handleChange}
            ></textarea>
            
            <div className="contact-options">
                <label className="checkbox-container">
                    <input 
                        type="checkbox" 
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    <span className="label-text">Deseo suscribirme al newsletter</span>
                </label>
            </div>

            <div className="button-group">
                <button type="submit" className="contact-button">Enviar</button>
                <button type="button" onClick={handleReset} className="contact-button reset-button">Limpiar</button>
            </div>
        </form>

        {/* Toast Notification */}
        <div className={`toast-notification ${toast.show ? 'show' : ''} ${toast.type}`}>
            <div className="toast-icon">
                {toast.type === 'success' ? '✓' : '✕'}
            </div>
            <div className="toast-message">{toast.message}</div>
        </div>
     </section>
    )
}

export default Contact