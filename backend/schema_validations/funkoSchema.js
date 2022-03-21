const Joi = require('joi');

const funkoSchema = Joi.object(
    {
      name: Joi.string().minLength(3).maxLength(30).required().message(
        {
          'string.base': 'El nombre debe ser un String',
          'string.empty' :'El nombre no puede estar vacío',
          'any.required': 'El nombre es un campo requerido',
          'string.min':'El nombre debe tener como minimo 3 caracteres',
          'string.max': 'El nombre debe tener como maximo 30 caracteres',
        }
      ),
      category: Joi.string().minLength(5).maxLength(30).required().message(
        {
          'string.base': 'La categoria tiene que ser un string ',
          'string.empty': 'La categoria no puede estar vacia',
          'any.required': 'La categoria es un campo requerido',
          'string.min': 'La categoria debe tener como minimo 5 caracteres',
          'string.max' : 'La categoria debe tener como máximo 30 caracteres', 
        }
      ),
      ilimited: Joi.bool().required().message(
        {   
          'bool.base': 'El campo ilimitado debe tener un valor verdadero o falso',
          'bool.empty': 'El campo ilimitado no puede estar vacio',
          'any.required':'El campo ilimitado es requerido',
      }),
      price: Joi.number().min(2).max(30).required().message(
        {
          'number.base': 'El campo precio tiene que ser un número',
          'number.empty': 'El precio no puede estar vacío',
          'any.required': 'El precio debe tener como minimo 2 digitos',
          'number.max': 'El precio puede tener como maximo 30 digitos',
      }),
      colecction: Joi.string().minLength(5).maxLength(30).required().message(
        {
          'string.base': 'La colección debe ser un string',
          'string.empty': 'La colección no puede estar vacía',
          'any.required': 'La coleccion es un campo requerido',
          'string.min': ' La colección debe tener como minimo 5 caracteres',
          'string.max': 'La colección debe tener como máximo 30 caracteres',
      })    
});

module.exports =funkoSchema;