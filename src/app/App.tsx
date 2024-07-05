
import './styles/App.scss'
import React from "react";
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";



function App() {


  return (
      <>
          <div className={classNames('app', {}, [])}>
              <Suspense fallback="loading">

                  <div className="content-page">
                    <AppRouter/>

                  </div>
              </Suspense>
          </div>
      </>
  )
}

export default App
