import './/App.css';
import React from 'react';
import Button from './Components/Button';
import NavBar from './Components/NavBar';

function App() {

  const defaultVariant = "outline";

  return (

    <section>
      <div className="bg-blue-300 hover:bg-blue-400 border-blue-600 focus:border-blue-900 bg-brown-300 hover:bg-brown-400 border-brown-600 focus:border-brown-900 
      bg-red-300 hover:bg-red-400 border-red-600 focus:border-red-900 bg-gray-300 hover:bg-gray-400 border-gray-600 focus:border-gray-900" hidden></div>
      <section id="flex-wrapper" className="flex flex-col sm:flex-row">
        <NavBar />
        <section id="container" className="flex flex-col basis-1/2 gap-8 py-12 px-4">
          <header>
            <p className="text-3xl">Buttons</p>
          </header>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="" iconPlacement="" />
            <Button buttonVariant="default" hover={true} focus={true} noShadow={false} disabled={false} size="" color="" iconType="" iconPlacement="" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="outline" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="" iconPlacement="" />
            <Button buttonVariant="outline" hover={true} focus={true} noShadow={false} disabled={false} size="" color="" iconType="" iconPlacement="" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="text" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="" iconPlacement="" />
            <Button buttonVariant="text"hover={true} focus={true} noShadow={false} disabled={false} size="" color="" iconType="" iconPlacement="" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={true} disabled={false} size="" color="" iconType="" iconPlacement="" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={true} size="" color="" iconType="" iconPlacement="" />
            <Button buttonVariant="outline" hover={false} focus={false} noShadow={false} disabled={true} size="" color="" iconType="" iconPlacement="" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="delete" iconPlacement="start" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="delete" iconPlacement="end" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="cart" iconPlacement="start" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="cart" iconPlacement="end" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="sell" iconPlacement="start" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="sell" iconPlacement="end" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="video" iconPlacement="start" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="video" iconPlacement="end" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="arrow" iconPlacement="start" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="" iconType="arrow" iconPlacement="end" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="sm" color="" iconType="" iconPlacement="" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="md" color="" iconType="" iconPlacement="" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="lg" color="" iconType="" iconPlacement="" />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="default" iconType="" iconPlacement="" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="primary" iconType="" iconPlacement="" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="secondary" iconType="" iconPlacement="" />
            <Button buttonVariant="default" hover={false} focus={false} noShadow={false} disabled={false} size="" color="danger" iconType="" iconPlacement="" />
          </section>
          <footer className="py-8">
            <span className="text-gray-500">created by <span className="font-bold">guilhermealima</span> - devChallenges.io</span>
          </footer>
        </section>
      </section>


      {/* TODO - Navbar */}
      {/* TODO - Buttons */}
    </section>
  );
}

export default App;
