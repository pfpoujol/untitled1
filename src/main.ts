import params from './parameters.json';
import {RepartitionNormale} from "./repartition/RepartitionNormale";
import {Population} from "./Population";
import {TransactionRandomSharedPot} from "./transaction/TransactionRandomSharedPot";
import {InteractionRandom} from "./interaction/InteractionRandom";
import {RepartitionRandom} from "./repartition/RepartitionRandom";
import {TransactionFullyRefundedPot} from "./transaction/TransactionFullyRefundedPot";
import {InteractionNeighbor} from "./interaction/InteractionNeighbor";

const population = new Population(params.populationSize, params.nbIteration, new RepartitionNormale(params.mu, params.sigma), new TransactionRandomSharedPot(new InteractionRandom(params.populationSize)));
//const population = new Population(params.populationSize, params.nbIteration, new RepartitionRandom(), new TransactionFullyRefundedPot(new InteractionNeighbor(params.populationSize)));

population.process();






