import './profile.scss';
import Card from '@/components/Card';

export default (...params) => (
  <div
    className="flex mb-4 max-h-full px-10"
  >
    <div className="w-1/3 h-auto relative bg-white m-4">
      <Card />
    </div>
    <div className="w-3/4 bg-white h-auto relative m-4">
      <div className="p-4">
        <h1 className="text-left font-bold">Will Schenk</h1>
        <h2>COO, CoFounder</h2>
        <p>
          Will focuses on overall internal management of
          HappyFunCorp, which involves making sure that people are
          happy and productive, that clients are happy with their
          projects. This involves meetings and a lot of psycology.
          It's rewarding when the company is growing and thriving,
          but also very different from time spent immersed in the
          fun of computers. The career grew out of the hobby, and
          now that my daily job is different from the hobby I can go
          back to being a hobby programmer. Coding for the pleasure
          of it.
        </p>
      </div>
    </div>
  </div>
);
