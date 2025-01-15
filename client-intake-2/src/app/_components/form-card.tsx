'use client'

import { useState } from 'react'

const formSteps = [
  {
    title: 'User Information',
    fields: [
      { name: 'username', label: 'Username', type: 'text' },
      { name: 'email', label: 'Email address', type: 'email' },
      { name: 'firstName', label: 'First Name', type: 'text' },
      { name: 'lastName', label: 'Last Name', type: 'text' },
    ],
  },
  {
    title: 'Contact Information',
    fields: [
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'country', label: 'Country', type: 'text' },
      { name: 'postalCode', label: 'Postal Code', type: 'text' },
    ],
  },
  {
    title: 'About Me',
    fields: [
      { name: 'aboutMe', label: 'About me', type: 'textarea' },
    ],
  },
]

export default function PaginatedForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    username: 'lucky.jesse',
    email: 'jesse@example.com',
    firstName: 'Lucky',
    lastName: 'Jesse',
    address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
    city: 'New York',
    country: 'United States',
    postalCode: 'Postal Code',
    aboutMe: 'A beautiful UI Kit and Admin for JavaScript & Tailwind CSS. It is Free and Open Source.',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  const currentStepData = formSteps[currentStep]

  return (
    <section className="py-1 bg-gray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-700 text-xl font-bold">
                My account
              </h6>
              <button className="bg-gray-800 text-white active:bg-gray-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                Settings
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                {currentStepData.title}
              </h6>
              <div className="flex flex-wrap">
                {currentStepData.fields.map((field) => (
                  <div key={field.name} className={`${field.type === 'textarea' ? 'w-full' : 'w-full lg:w-6/12'} px-4`}>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor={field.name}>
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData] as string}
                          onChange={handleInputChange}
                          rows={4}
                          className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData] as string}
                          onChange={handleInputChange}
                          className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <hr className="mt-6 border-b-1 border-gray-300" />
              
              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="bg-gray-800 text-white active:bg-gray-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 disabled:opacity-50"
                >
                  Previous
                </button>
                {currentStep === formSteps.length - 1 ? (
                  <button
                    type="submit"
                    className="bg-gray-800 text-white active:bg-gray-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-gray-800 text-white active:bg-gray-700 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
