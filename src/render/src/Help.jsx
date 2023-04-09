import ReturnButton from "../components/common/returnButton";
import Accordion from '../components/common/accordion';

function help() {
  return (
    <div className="bg-palette-white75 dark:bg-palette-gray100 min-h-screen">
      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="Help" to="/" />
      </div>
      <div className="flex justify-center pt-24">
        <div className="w-1/2 pb-1/4">
            <Accordion allowMultipleOpen>
            <div label='Live Module'>
            <p>
                <strong>Common Name:</strong> American Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Texas to North Carolina, US
            </p>
            <p>
                <strong>Endangered Status:</strong> Currently Not Endangered
            </p>
            </div>
            <div label='Connecting Network Cameras'>
            <p>
                <strong>Common Name:</strong> American Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Texas to North Carolina, US
            </p>
            <p>
                <strong>Endangered Status:</strong> Currently Not Endangered
            </p>
            </div>
            <div label='File Module'>
            <p>
                <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Eastern China
            </p>
            <p>
                <strong>Endangered Status:</strong> Critically Endangered
            </p>
            </div>
            <div label='Logging Threshold'>
            <p>
                <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Eastern China
            </p>
            <p>
                <strong>Endangered Status:</strong> Critically Endangered
            </p>
            </div>
            <div label='Hardware Requirements'>
            <p>
                <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Eastern China
            </p>
            <p>
                <strong>Endangered Status:</strong> Critically Endangered
            </p>
            </div>
            <div label='Binary Classifier Model'>
            <p>
                <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Eastern China
            </p>
            <p>
                <strong>Endangered Status:</strong> Critically Endangered
            </p>
            </div>
            <div label='Project Info'>
            <p>
                <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
                <strong>Distribution:</strong> Eastern China
            </p>
            <p>
                <strong>Endangered Status:</strong> Critically Endangered
            </p>
            </div>
        </Accordion>
        </div>
      </div>
    </div>
  );
}

export default help;
