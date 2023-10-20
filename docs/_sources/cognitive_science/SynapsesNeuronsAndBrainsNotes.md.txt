# Notes on Synapses, Neurons, and Brains

On October 18, 2023, I started on the course [Synapses, Neurons, and Brains](https://www.coursera.org/learn/synapses).  Below are my notes on the course.  As always with notes, expect lots of abbreviated language and shortcuts.  I also have some much more preliminary [Review Notes](SynapseseNeuronsAndBrainsReviewNotes).

## Week One

Some dramatic billion-dollar projects include:
	* Allen Institute Seattle - Mouse/Human Brain Atlas
	* [Janelia farm](https://www.janelia.org/) - DC, USA 
	* EU Human brain project
	* President Obama's "Brain Activity Map" initiative

### Five exciting things:
* Connectomix (see also [Wikipedia article](https://en.wikipedia.org/wiki/Connectomics))
* Brainbow
* Brain-machine/Computer Interface (BMI)
* Optogenetics
* Computer Simulation of the Brain (e.g. Blue Brain Project)

Camillo Golgi and Santiago Ramon Y Cajal are "The Two Giants", the beginning of modern neuroscience.   Golgi stains actually only stain about < 1% of cells, so doesn't make tissue dark, you can then see those stained neurons (a later term).  1906 Nobel Prize.

### Connectomics

Connectomics is modern anatomy wiring diagram -- cut very thin slices (nanometer resolutions).  Electron microscope used for this.  Detect slice structure separately, then reconnect slices.  So it's 3D mapping, so far done on pieces of brain, not whole brain.  

Prospects for connectomics is to give us a complete blueprint of healthy and sick brain, and we may start to bridge the "structure-to-function" problem, and get into simulation-based research.

### BrainBow

Genetic staining of neurons in vivo (light microscope -- micrometer resolution).  Harvard messing with mice genes, inserting pieces of DNA, when DNA is expressed, some cell types become colorful because of floursecent proteins (hence Brainbow).  By the way, synapses are too small for this resolution, but can see general placement of neurons.  Lot of art exhibitions based on this.  

Prospects of this are 1) structural basis for learning; 2) taggging and genetic characterization of different cell types, eg. in retina, or find out how many cell types you have 3) Tracing connections in circuits, short and long range.

### Brain Machine Interface

Electrodes implanted and listening to a single cell's spike, or a large group of cells.  Spikes are the common language.  Talks to an Artificial Neural Network, and then to a robotic arm.  Or can go the other way to ameliorate parkinsons, pulses from battery into basal ganglia.  Basically a pacemaker for brain.  Future challenges are 1) to be able to telemetrically record from within the brain without invasive electodes 2) real-time signal analysis. 3) Close the loop for movement with touching.

### Optogenetics

Idea is to tweak the genetics of cells to plant probes that are sensitive to light, so you can shine light of particular wavelength and have it generate a signal.  In nature, only retina is sensitive to light.  But existence of retinal receptors means there are genes that can code for molecules that are sensitive to light.  With two examples.  Ion channel Rhodopsin spikes when blue light shines on it. C.f. [Rhodopsin](https://en.wikipedia.org/wiki/Rhodopsin).  Other example Natronomas pharaonis, yellow light prevents spikes.  Movie from Janelia Farm (aka now Janelia Research Campus), can induce mice to drink with blue light on certain group of cells.

### Blue Brain Project - Brain Simulation

Computer simulation (modeling) of neural circuits.  Lord Kelvin (William Thompson) quote:
"I am never content until I have constructed a mechanical model of the subject I am studying. If I succeed in making one, I understand; otherwise I do not." [BL]

Uses powerful "[Blue-Gene](https://en.wikipedia.org/wiki/IBM_Blue_Gene)" IBM computer.  Blue as in Big Blue, IBM.  Modeling is writing equation to describe types of spikes for certain class of cells.  Different equations for different spike (ultimately cell) types.

Modelling helps us to understand the network (e.g. by visualizing model in action).

So this is "simulation-based medicine [or s-b research]"

## Week Two

### The Neuron

* The neuron
* The axon
* Dendrites / dendritic spines
* Neuron types
* Synapses
* Electrical signals
	* Spike (action potentitial)
	* Post-Synaptic Potential (PSP)
* Neuron as I/O Device

Historical perspective first, Hooke, Schwann, Golgi, Ramon Y Cajal, ... and interestingly, Sigmund Freud (drawing crayfish neurons).  

Nice images from Blue Brain, also videos of activity of living brain.

### The Neuron Doctrine

Controversy between Camillo Golgi and Santiago Ramon y Cajal (RyC). Ramon y Cajal originally an artist.  Looking through primitive microscope at different parts of nervous system in different animals, using Golgi staining method.

RyC by looking at anatomy only, conceived that information flows through axon, to and then to dendrites.  Could not really see communication, drew arrows showing information flow, then thought from dendrite to cell body, to axon, to dendrite of next neuron.  So theory that we're dealing with individual cells is the neuron doctrine.  The theory of dynamic polarization is that the receiving dendrite is somehow polarized, then flows to body, then axon.

N.B. RyC:

	* Dendrites are the receptive devices (Input).
	* Axons are the sending (output) devices.

We agree with this.  Golgi did not like this -- thought they were all connected physically.  1906 was a debate at the podium for Nobel prize. 

Both axons and dendrites look like trees, axonal trees, dendritic trees.  Axonal trees have varicosities (boutons) -- this is where the neurotransmitters send the signal.  Sometimes one axon will have 5,000 synapses

### The neuron as an input / output device

**NB:  Really important introduction**

NOTE:  This [video lesson](https://www.coursera.org/learn/synapses/lecture/97K4b/the-neuron-as-i-o-device-part-i) has an excellent abstracted image associated with it.

Many (like up to thoushands) of axons (synapses) connect to one dendrite.  Make little change in voltage, local synaptic potential.  Certain types of cells (red in picture) make positive voltage (excitatory), the other ones are inhibitory.  All together they sum the input, and the cell "decides" whether to generate an output yes or no.  Output if there is one will be a set of spikes, tak tak tak etc.

Image too of pyramidal cell from cortex.

### The Axon

Just after the soma, axon initial segment (AIS), hot region generating spikes.  Consists of special ion channelss that make this region hot, i.e. enables generation of spike.  This is where action potential starts, then it propagates down the axon, to all axon branches.  Between axon segments are nodes of Ranvier. Between nodes of Ranvier are inter-nodes, with myelin sheath.  Nodes of ranvier don't have myelin sheath.  Myelin is a lipid, it electrically isolates axon.  Terminals of axon are pre-synaptic sites, boutons or varicosities; up to 5,000 per axon.  No myelin on varicosity -- it's "bare wire".

Myelin internodes generated by special set of non-neuronal cells.  These are sometimes called glial cells, or have other names too that aren't worth remembering but are oligodendrocytes.  Electrical potential gets boosted in nodes of Ranvier.

Note that dendrites never have myelin.

By the way multiple sclerosis is a disease where the immune system attacks the myelen sheath, and messes with the signal flow.

Nodes of Ranvier amplify (boost) signal.

Summary:

* Axon is highly branched structure emerging from soma.  Can branch locally or go centimeters or even meters away from soma.
* Starts with hot axon initial segment, where spike starts, then it propagates along axon.
* Covered with myelin, except in nodes of ranvier, where there are hot ion channels
* Has frequent swellings (boutons), where the neurotransmitter "hides" (pre-synaptic site).

Most importantly, axon is an output electrical device.  It generates and carries electrical signals called spikes.

### The Dendrite
10/20/2023

Pictures of dendrites (links below to 3rd party resources)

* [Purkinje cells](https://en.wikipedia.org/wiki/Purkinje_cell) from cerebellum, "small brain".  Flat, bush-like.
* [Starburst amacrine](https://en.wikipedia.org/wiki/Amacrine_cell) retina cells.
* [Pyramidal cell](https://en.wikipedia.org/wiki/Pyramidal_cell) -- common in hippocampus; pyramidal structure (triangular looking) cell body.

Point here is name of cell often depends on structure of dendritic tree.

RyC drawing shown pyramidal cell, with small branches, dendtritic spines, so this type is a spiney dendritic tree, and these spines are "where synapses are made onto".  Pyramidal cells are spiney.  Sometimes 10,000 spines per pyramidal cell.  On his death bed RyC was drawing spines.

Typical number for pyradimal cell in cortex: 

* total area 20,000 square micrometer [(= micron).  One millionth of a meter]
* each spine has area of 1 square micrometer
* # of dendritic spines per cell, 8,000, average.  But could be 30,000 or more.
* Listen to 10,000 synapses

In cortex, in terms of area, 50-60% of brain area is dendrites.

Pictures of human pyramidal cells from cortex.  Showing apical tree (point of pyramid) and basal tree (again see [Pyramidal cell](https://en.wikipedia.org/wiki/Pyramidal_cell)).

Takeaway:  cortical pyramidal cells have dendritic spines.

### Neuron Types

Can classify by:

* Anatomical features (e.g. "face" of dendrites and axons)
* Functional, .e.g. excitatory (principle) vs inhibitory (interneurons) -- balance between two is very important, by way.
* By electrical spiking pattern.  Some cells fire more or less, different patterns.
* By chemical characteristics.
* Using gene expression

Count of neurons in human brain:  a number close to 100 billion.

Work on this is not final.  # of types not final, depends on classification, but could say several thousand types overall.

Example (detail on point 2), in neocortex, principle (excitatory cells) have long axon that projects to other brain regions, whereas interneurons (inhibitory) have local axonal projection.

2013 work by Javier DeFelipe to classify inhibitory neurons, Chandelier, large baskent, horse-tail, Cajal-Retzius, etc. etc.  Depends largely in differences in dendritic tree or sometimes axonal structure.  Why different structures an interesting question.  [I also wonder if this needs to be modeled for an artificial (ANN) human.]

Slide of electrically-based (spiking) classification.  Some fire a lot (regular).  Some "stutter".  We don't understand the structual reason for this.

### The Synapse

The synapses is a chemical / electrical device that connects axon of neuron A to dendrites of nueron B.  Pictures of very close axon - denrite connections.  Single pre-synaptic cell can make contact at several locations to the same post-synaptic cell.  Using electron microscope, can see axon bouton (pre-synaptic) connecting to dendritic spine (post-synaptic). They don't physically touch, but very very small gap.  

Side note when axon connecting to spiny dendrite, this is typically excitatory type connection.  Electron microscope view showing showing axon A with small vesicles, a very small gap, and a dentridic spine, B  -- vesicles contain neurotransmitter, e.g. 5,000 molecules of glutamate, acytlcoline, or seratonin.  So vessicles live in axonal varicosities (boutons).  Neurotransmitter travels through gap to dendrite spine.  Spike is digital, all or none.  When spike arrives, secretes the neurotransmitter -- spike is the trigger.  Post-synaptic, you'll also see a signal too, "excitatory synaptic potential".  So two types of activity:

* Action potential (from axon)
* Post-synaptic potential (could be excitatory or inhibitory)

Major difference is action potential is digital signal.  The post-synaptic potential is graded, analog signal [this reminds me of how ANNs are modeled?].  So digital signal on one side to analog on other side. So digital-to-analog converter.

Slide on synapse vesicle quantal release.  

### The Neuron as Output Device: Part 2

Summary of Lesson 2

* Different cell types.
* Excitatory input can come from very far away, e.g., thalmus to the cortex.
* Cell may receive 1500 synapses from neighbors, 360 from thalmus, etc.
* Now reshow important diagram
* In the receiving cells, have Excitatory post-synaptic potentials (EPSPs) and Inhibitory post-synaptic potentials (IPSPs) -- eventually all gets summed up in the cell body, may reach threshold for action potential generation.