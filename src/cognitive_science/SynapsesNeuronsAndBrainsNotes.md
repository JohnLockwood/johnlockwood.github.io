# Notes on Synapses, Neurons, and Brains

On October 18, 2023, I started on the course [Synapses, Neurons, and Brains](https://www.coursera.org/learn/synapses) with Professor Idan Segev.  Below are my notes on the course.  As always with notes, expect lots of abbreviated language and shortcuts.  I also have some much more preliminary [Review Notes](SynapseseNeuronsAndBrainsReviewNotes).

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
* each spine has area of 1 square micrometer of dendritic spines per cell, 8,000, average.  But could be 30,000 or more.
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
* Excitatory input can come from very far away, e.g., thalamus to the cortex.
* Cell may receive 1500 synapses from neighbors, 360 from thalamus, etc.
* Now reshow important diagram
* In the receiving cells, have Excitatory post-synaptic potentials (EPSPs) and Inhibitory post-synaptic potentials (IPSPs) -- eventually all gets summed up in the cell body, may reach threshold for action potential generation.

First quiz first attempt got 92.85% on attempt one, 10/21/2024


## Week Three - Electrifying Brains -- Passive Electrical SIgnals

### The Cell as an RC Circuit

Today starting with passive properties.  Already mentioned, pre-synaptic we have action potential, digital, all or none.  In this lesson we're talking about next part, the synatpic potential, in the dendrite.  So in week 3: 
* link anatomical structure to idea of passive-RC circuit.  
* talk about membrane, and the membrane time-constant (Tau-M)
* Temporal summation of repeated inputs -- "electrical memory"
* Generation of post-synaptic-potential (PSP) in post-synaptic membrande
* Continue talking about excitatory (E) and inhibitory (I) synapses.
* E & I interaction

Start with a small patch of membrane, can wrap it into a sphere.  We'll place an electrode, and record dif between inside and outside of cell (voltage).  If we inject a positive current into cell, I (current), if you do this you see a voltrage change (V), the voltage change doesn't look square like current we injected, but it grows over time as a smooth curve, also slowly drops when current stopped.  So cell is not a mere resistor, because if it were, and you injected I, you would get a voltage that consists of I x R.  (Ohm's law - V = IR).  Not like that, it takes time t to grow, and also to decay.  We call curved response to I, we get a [depolarizing current](https://en.wikipedia.org/wiki/Depolarization), i.e. becoming less negative.

When people saw this, they though that a cell that acts like an [R-C circuit](https://en.wikipedia.org/wiki/RC_circuit).  If you inject I into such a circuit, it takes time to grow, and when stop injecting current, takes time to go back to baseline or zero.  So RC circuit is a good approximation of such behavior.

### The voltage equation for the passive cell

The math for an RC circuit, want to again measure V (voltage) in response to current (I):

Total current is either resistance current or capacitance current.

$$ C\space\frac{dV}{dt} + \frac{V}{R} = I $$

So capacitative current + resistance current is equal to Current (I).

This is basicall [Kirchoff's Law](https://en.wikipedia.org/wiki/Kirchhoff's_circuit_laws#Kirchhoff's_voltage_law)

If you solve this equation for V you get behavior of cell, solution is linear because C is constant, resistance is constant, current input (I) is constant.  end up with dv/dt as a solution, which is a derviative, so shows change over time.

Initial conditions, V (t = 0) = 0, and up with some V after certain time.

$$ V(t) = I*R\space\space(1 - e^{\frac{-t}{RC}}) $$

At t = 0, e to zero is one, 1-1 = 0, so V(t = 0) = 0, or

$$V(t = 0) = 0$$

If inject current for infinite time, e to power of -t goes to zero, so IR * (1 - 0) = IR so 

$$ V(t = \infty) = IR $$

This last is steady state.

So these are two ends.

### The Membrane Time Constant

This time we want to look at $ t = RC $.

By the way, RC is many times called tau,

$$ \tau $$ 

or sometimes

$$ \tau_{m} $$

i.e. tau membrane.

Looking at t = RC = Tau, what is value of V.  Well ends up being 

$$ 1 - e^{-1} $$

So 

$$ V(t = \tau) = IR * (1 - e^{-1}) $$

The one minus e to the -1 is = .63, so

$$ V(t = \tau) = .63 IR  $$
 
$$ IR = \infty $$

Can use same equation to ask how will voltage decay (attenuation) when we stop the current.  So still exponential, but not 1 - exponent, just exponent.  Attenuation like build-up.

Tau-M is caled the membrane time constant (very important).

Attenuation function is 

$$ V(t) = V * e^{\frac{-t}{\tau_{m}}} $$

Growth and decay are mirror images of one another, goverened by Tau-M, the membrane time constant.  It governs how fast the voltage develops / attenuates.  If time constant long, will take a long time to attenuate, and vice versa.  (earlier I believe he said RC (tau) in seconds).

This constant in effect tells you about the electrical memory of cell.  Short means it "forgets" quickly.

Another important parameter is R, sometimes called

$$ R_{in} $$

R input, or input resistance.

R directly tells you maximum voltage you can reach for a given I.  RC tells you how fast go up and down.

So critical parameters for passive RC circuits are:

* R 
* RC

### Temporal Summation

An important consequence of time constant, what if inject an intermittent current, not a constant one.  So I is intermittent.  Voltage goes up and then attenuates, but not all the way down, so following second period of I, get a buildup on top of remainder of previous one.  This is called temporal summation.

If would have done it constantly, would have gotten a larger buildup.  IR is maximum you can get.

Next shows negative current, here voltage will be pushed down.  The name for this [mentioned in passing] is [hyperpolarization](https://en.wikipedia.org/wiki/Hyperpolarization_(biology)).  (When cell gets more positive, it's called depolarization, or hypopolarization).

This temporal summation of positive and negative current is "exactly what synapses are doing".

### The Resting Potential

Now back to cell membrane (circle) near R/C diagram -- this is the "Passive Membrane Model".  

New:  When you implant the electrode into the cell, suddenly see a drop in voltage.  I.e., cell is more negative than outside, so drop in voltage is from zero to "something like -70 mV" (millivolts).

So inside of cell is about 70 mV more negative than the outside of the cell. This is called the resting potential, i.e., with no current.  This negative charge inside requires energy to maintain.  In any brain, inside is more negative, so because of this we need to add a battery to the original RC circuit.  (This appears to be a good [related article](https://www.cns.nyu.edu/~david/handouts/membrane.pdf)).

Resting potential symbol:

$$ E_{\space rest} $$

Again:
	More positive:  Depolarization
	More negative:  Hyperpolarization

Next stage is to speak about synapses, which can add this current....

### The Synaptic Potential, Part I

Up until now we've dealt with passive proprerties of cell, resting potential.

BTW, ballpark values for R * C, Time constant, = Tau, of on the order of 20 milliseconds

Brief review of synapse, vessicles of axon meeting receptors of dendrite -- what happens when neurotransmitter interacts with receptors.  We get new ion channels opened in the receptor, which enable the flow of current, either from out -> in or from in -> out.  So on the dendrite side eventually, result of neurotransmitter uptake is new ion channels.  Channel behaves like a conductor or a resistor, we call it 

$$ g_{\space syn} $$

Wait -- now talking about it as a battery for the synapse:  

$$ E_{\space syn} $$


### The Synaptic Conductance

Looking at dendritic side membrane, earlier said two types of channels. 
* One type is passive type that, in total, represent the R value (resistance) in the cell.   ("white channels" for purposes of drawing)
* Other type ("red channels" for purposes of drawing), when synapse interacting w/ neurotransmitter.  These then are synaptic channels.  

We represent the conductance of these with 

$$ g_{\space r} $$ 

for the r (resting channel), passive resistance, and

$$ g_{\space s} $$

for the synaptic channels.

Red channels only open in response to reaction with a neurtransmitter.  Collectively they result in something called the synaptic voltage.

But we need to also discuss the Synaptic Battery (next)

### The Synaptic Battery

Difference in ion concentration is a general property of living cells.  In particular in nerve cells.  For instance, outside nerve cells there are a LOT of (positive +) sodium channels, and much fewer inside cells.  In case of potassium, opposite is true, lots inside, less outside.

If you open a particular sodium channel only, because of concentration gradient, you will get positive flow into the cell.  So will get depolarization, John says -- and professor says a second later. :)

So calling it a battery is a way of representing the flow of ions.

For potassium, because there is more inside, it will flow from inside -> outside, so you will lose positive charge, so cell will become hyperpolarized.

### The Synaptic Potential, Part II

So, again:
* Post-synaptic membrane has both passive channel and synaptic channel.
* Specific ion channels get opened, allows current to flow either in or out.

Circuit has $ g_{\space r} $ (g-rest), resting conductance plus resting battery, $ E_{\space r} $, the whole -70 millivolts -- this is the passive part of circuit.

Synaptic part is $ g_{\space s} $ synaptic conductance plus $ E_{\space s} $, synaptic battery. 

Equation before was $ C \frac{dV}{dt} + g_{r} (V - E_{r})$  First part is capacitative current, second part of that is passive current.

Now equation with red current (synaptic part):

$ C \frac{dV}{dt} + g_{r} (V - E_{r})  + g_{s} ( V - E_{s}) = 0 $  

Last term is synaptic current.  Sum of all terms in above equation = 0 according to kirchoff's law.  You can solve this equation to get that last V -- the voltage generated by the synapse.


### The Voltage Equation for the Synapse and EPSP and IPSP

Again, the current equation is:

$ C \frac{dV}{dt} + g_{r} (V - E_{r})  + g_{s} ( V - E_{s}) = 0 $  

If solve it for V -- the voltage change due to activity of synapse, you get this equation:

$$ V(t) = \frac{g_{r} \space E_{r} + g_{s} \space E_{s}}{g_{r} + g_{s}} \space (1 - e^{-t \frac{g_{r} + g_{s}} {c}})$$

There is a ceiling to positive or negative synaptic battery.

Reasonable range is something like +200 millivolts to -90 millivolts.  Whole world represented by signals in this range. :)  If voltage goes up, it's EPSP (Excitatory Post-Synaptic Potential). If it goes down, it's IPSP (Inhibitory Post-Synaptic Potential)

### Summary 

EPSP and IPSP diagram, we have time consant -- if both at both time, have temporal summation.

Quiz for this one done on 10/25/2023, got this nice little encouragement along with a 90% grade:

![Grade on second quiz on Electricity and Brains](./Congratulations.png)

## Week Four:  Electrifying Brains - Active Electrical Spikes

### The Hodgkin Huxley Experiments

Now talking about active signals -- the spike!  The all or none, digital phenomenon that comes from the axon. This again is the action potential (axon) -- as opposed to resulting synaptic potential in the dendrite.

Outline:

1. The excitable ("spiking" axon)
2. The Hodgkin & Huxley experiments (Two giants)
3. Space clamp and voltage clamp
4. Membrane conductances/currents underlying the spike
5. Hodgkin & Huxley model for spike initiation (math. model)
6. Spike propogation along axon
7. From synapses to spikes

Two giants:  Sir Alan Lloyd Hodgkin and Sir Andrew Fielding Huxley -- both working in Cambridge before WWII.  Nobel prize 1963. They used the squid as an experimental animal.  Squid has unique property -- a giant axon, that's about 0.5 mm (500 micrometer) wide.  (Axons in brain on the order of micrometers -- too small to work on)
This allows you to place an electrode (the long way, like a catheter).  Published first view of spike (on oscilloscope) in 1939, by electrically signalling the cell.  Needs stimulus strong enough in depolarizing direction.  Starts from resting potential.  Goes up, then goes back down below resting potential (but gradually creeps back up).  Spike is about 1 millisecond long.

This is a universal activity of nerve cells.

Wrote beautiful set of 4 equations in several papers (1952).  Now we understand action potential in a very compact way.  "I see it as a triumph of theory.  Actually I don't think that today we have such a beautiful theory in neuroscience as the Hodgkin/Huxley theory for the spike."

### Membrane Currents Underlying the Spike

Example of a votage clamp -- now changing voltage (Hodgkin and Huxley) by a fixed amount.  So there is a voltage change.  Behaves like a passive RC current -- nothing new -- if depolarizing current is sub-threshold.  If depolarize further, "For suprathreshold depolarizing voltage clamp, the recorded membrane current (after the first capacitative current) flows first inwards (into the axon) and later outward (from inside to outside)." -- this is a surprise.  First see capacitative current as before -- as you hold voltage -- see first an inward current into the axon, then curves up.  Remember, voltage is fixed, but then get inward then outward current.  Found that if you used drug, tetrodotoxin (TTX), a fish toxin, if put it on axon, the inward phase disappears, left only with the outward phase.  With tetraethilammonium (TEA) -- now the outward current gets blocked, but leaves inward.  What they found by playing with Na and K concentrations, that inward was Na K.

Found sodium current was inward current (fast -- happens arly on) -- then changes to potassium current later (outward current).  Outward current continues if continue voltage clamp. In 1954D paper by Hodgkin / Huxley, circuit diagram of squid axon.

Have Capacitive current + Early sodium current + later potasium current + leak current (resting state cell is negative).

### Modeling the Membrane Currents

$$ I_{K} = g_{K} (V_{m} - E_{K}); \space \space I_{Na} = g_{Na} (V_{m} - E_{Na})
$$

I.e. for first one, membrane voltage minus the potassium ion battery times the conductance = the current.  Same for sodium.  In voltage clamp case, we fix $ V_{m} $.  Can try different values of $ V_{m} $m, measuring conductance of potassium and sodium.  Important:  Degree of conductance depends on voltage.  Get more conductance of both depending on voltage.

Summary:

* The slow (K) current (conductance) does not inactivate during voltage clamp (VC)(outward).
* The K conductance rises slower than it decays at the end of VC.
* The fast (early) Na conductance inactivates during VC.

H. & H. fitted an equation.  The fact that it grows slower and attenuates faster, rising phase described as function
$$ (1 - exp(-t))^{4} $$
and the decay as 
$$ exp \space (-4t) $$

So then they wrote this equation:
$$ \newcommand{\overbar}[1]{\mkern 1.5mu\overline{\mkern-1.5mu#1\mkern-1.5mu}\mkern 1.5mu} $$
$$ g_{K} = \overbar{g_{K}}^{n^{4}} $$

Right hand side, "g-k-bar", is maximum conductance, but actual conductance depends on term n -- which is the voltage.  When it's zero, no potassium conductance. When n = 1, you get maximum conductance since $ 1^{4} = 1$  Can also say n repesents the proportion of K-ion channels in the open state.  Tried to relate that 4 to the number of ions are in a certain region of the membrane.