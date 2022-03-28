import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './header.css'

const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url);
  console.log({ photos })
  return (
    <div className="App">
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID f5hrUbLgtF6OhRJpBgaWcPvP-LW1Bm2pP57_RlYkjcY'
              }
            })

            const data = await response.json()
            // calling unsplash api
            console.log('success!')
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </article>
          )}
        </div>
      </div>
    </div>
  )
}

export default App