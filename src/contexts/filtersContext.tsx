'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
}

interface INameValues {
  currentName: string;
  setCurrentName: Dispatch<SetStateAction<string>>
}

interface IBrandValues {
  currentBrand: string;
  setCurrentBrand: Dispatch<SetStateAction<string>>
}

export const BrandContext = createContext('')

export const BrandContextProvider: React.FC<ProvidersProps> = ({ children }) => {
  const [currentBrand, setCurrentBrand] = useState('')

  const values: IBrandValues = {
    currentBrand,
    setCurrentBrand
  }

  return (
    <BrandContext.Provider value={values}>
      {children}
    </BrandContext.Provider>
  )
}

export const NameContext = createContext('')

export const NameContextProvider: React.FC<ProvidersProps> = ({ children }) => {
  const [currentName, setCurrentName] = useState('')

  const values: INameValues = {
    currentName,
    setCurrentName
  }

  return (
    <NameContext.Provider value={values}>
      {children}
    </NameContext.Provider>
  )
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <BrandContextProvider>
      <NameContextProvider>
        {children}
      </NameContextProvider>
    </BrandContextProvider>
  );
};