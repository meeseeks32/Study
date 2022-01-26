#pragma once

#include <JuceHeader.h>
#include "DJAudioPlayer.h"
#include "DeckGUI.h"

//==============================================================================
/*
    This component lives inside our window, and this is where you should put all
    your controls and content.
*/
class MainComponent  : public juce::AudioAppComponent
{
public:
    //==============================================================================
    MainComponent();
    ~MainComponent() override;

    //==============================================================================
    void prepareToPlay (int samplesPerBlockExpected, double sampleRate) override;
    void getNextAudioBlock (const juce::AudioSourceChannelInfo& bufferToFill) override;
    void releaseResources() override;

    //==============================================================================
    void paint (juce::Graphics& g) override;
    void resized() override;

private:
    //==============================================================================
    
    // Helper variables
    juce::Random rng;

    // Mixer component to handle 2 sound streams
    juce::MixerAudioSource mixerSource;

    // Player 1 + GUI
    DJAudioPlayer player1;
    DeckGUI deckGUI1{&player1};

    // Player 2 + GUI
    DJAudioPlayer player2;
    DeckGUI deckGUI2{&player2};


    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (MainComponent)
};
