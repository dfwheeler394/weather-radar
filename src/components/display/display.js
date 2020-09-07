import React from 'react';
const Display = (props) => (
    <div className='weather__info'>
        {
            props.city && props.country && <p className='weather__key'> <i className="fa fa-globe"></i> Location:
             <span className='weather__value'> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temperature && <p className='weather__key'> <i className="fa fa-thermometer-half" /> Temperature:
             <span className='weather__value'> {props.temperature} °C</span>
            </p>

        }
        {
            props.wind && <p className='weather__key' > <i className="fa fa-arrow-right" /> Wind:
                <span className='weather__value'> {props.wind} km/h</span>
            </p>
        }
        {
            props.humidity && <p className='weather__key' > <i className="fa fa-tint" /> Humidity:
                <span className='weather__value'> {props.humidity}  %</span>
            </p>
        }
        {
            props.description && <p className='weather__key'> <i className="fa fa-info" /> Conditions:
             <span className='weather__value'> {props.description}</span>
            </p>
        }
        {props.error && <p className='weather__key' > {props.error}</p>}
    </div >
)

export default Display;