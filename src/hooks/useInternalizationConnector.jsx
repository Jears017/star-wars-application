import { useState, useEffect } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '@/firebase'
import { ENGLISH } from '@/constants'

export const useInternalizationConnector = () => {
  const [en, setEn] = useState({})
  const [ru, setRu] = useState({})

  const enFirebaseCollection = collection(db, 'en')
  const ruFirebaseCollection = collection(db, 'ru')

  useEffect(() => {
    const getEn = async () => {
      const data = await getDocs(enFirebaseCollection)
      setEn(data.docs.map(doc => ({ ...doc.data() }))[0])
    }

    const getRu = async () => {
      const data = await getDocs(ruFirebaseCollection)
      setRu(data.docs.map(doc => ({ ...doc.data() }))[0])
    }

    getEn()
    getRu()
  }, [])

  return i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: ENGLISH,
    fallbackLng: ENGLISH,
    interpolation: { escapeValue: false },
  })
}
