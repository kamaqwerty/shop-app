

import React from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from "../../../api/api"
import Container from '../../../components/Container/Container'
import * as Forms from "../../../components/form"
import { FormsValidate } from '../../../helpers/helpers'
import useLocations from '../../../hooks/useLocations'
import cls from "./Register.module.scss"

export default function Register() {

  const { actions } = useLocations();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onBlur"
  });


  const handleRegister = (data) => {
    const file = data.avatarka[0];

    const formData = new FormData();

    formData.append("avatarka", file)

    const newBase = [];

    Object.entries(data).forEach(item => {
      if(!item[0].includes("avatarka")) {
        newBase.push(item)
      }
    });

    const personInfo = newBase.reduce((total, item) => {
      return {
        ...total,
        [item[0]] : item[1]
      }
    }, {})

    const newData = {
      ...personInfo,
      formData
    };

    if(!!newData) {
      const request = createUser(newData);

      request 
        .then(res => {
          actions.goToLogin();
        })
    }
  };

  return (
    <Container>
      <div className={cls.register_point}>
        <h2>Create your own account, for buy your favorite products!</h2>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            <Forms.Divider>
              <Forms.TextInput
                type="text"
                placeholder="Username"
                {...register("username" , FormsValidate("Username"))}
              />
              {errors.username && <Forms.ErrorsInput err={errors.username?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.TextInput
                type="email"
                placeholder="Email"
                {...register("email", FormsValidate("Email"))}
              />
              {errors.email && <Forms.ErrorsInput err={errors.email?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.TextInput
                type="file"
                placeholder="Avatarka"
                {...register("avatarka", FormsValidate("Avatarka"))}
              />
              {errors.avatarka && <Forms.ErrorsInput err={errors.avatarka?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.TextInput
                type="text"
                placeholder="Phone number"
                {...register("phone_number", FormsValidate("Phone number"))}
              />
              {errors.phone_number && <Forms.ErrorsInput err={errors.phone_number?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.TextInput
                type="date"
                placeholder="Date"
                {...register("birth_date", FormsValidate("Birthday"))}
              />
              {errors.birth_date && <Forms.ErrorsInput err={errors.birth_date?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.TextInput
                type="text"
                placeholder="About"
                {...register("about", FormsValidate("About"))}
              />
              {errors.about && <Forms.ErrorsInput err={errors.about?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.TextInput
                type="password"
                placeholder="Password"
                {...register("password", FormsValidate("Password"))}
              />
              {errors.password && <Forms.ErrorsInput err={errors.password?.message}/>}
            </Forms.Divider>

            <Forms.Divider>
              <Forms.AuthSubmit location={"Register"}/>
            </Forms.Divider>

            <Forms.Divider>
              <Forms.AuthNavigate location={"Register"}/>
            </Forms.Divider>
          </div>
        </form>
      </div>
    </Container>
  )
}



