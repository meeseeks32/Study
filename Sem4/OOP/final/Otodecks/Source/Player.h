/*
  ==============================================================================

    Player.h
    Created: 4 Feb 2022 11:56:53am
    Author:  eosdu

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>


//==============================================================================


//==============================================================================
/*
*/
class Player  : public juce::AudioSource       // Work with audio
{               
public:
    Player(juce::AudioFormatManager&);
    ~Player() override;

    //==================================================================

    // All available player states
    enum class PlayerState
    {
        Stopped,
        Starting,
        Playing,
        Stopping,
        Pausing,
        Paused
    };

    //==================================================================

    // Override pure virtual functions from the AudioSource parent class
    virtual void prepareToPlay(int samplesPerBlockExpected, double sampleRate) override;

    virtual void releaseResources() override;

    virtual void getNextAudioBlock(const juce::AudioSourceChannelInfo& bufferToFill) override;

    //==================================================================

    // Function to handle changes in player state
    void changeState(PlayerState newState);

    // Function to check the player state
    PlayerState getState() const;

    // Open file
    bool openFile(juce::URL audioURL);

    // Get access to the transport source, so GUI can attach listener
    juce::AudioTransportSource* getTransportSource();

    // Set new volume value
    void setGain(float newValue);

    // Set relative position
    void setPosRel(float relStamp);

    // Set position in seconds
    void setPos(float timeStamp);

    // Set tempo
    void setTempo(double tempo);
    
    // Get loop state
    bool isLooping() const;

    // Set loop state
    void setLooping(bool willLoop);

private:

    juce::AudioTransportSource transportSource;
    juce::AudioFormatManager& formatManager;
    std::unique_ptr<juce::AudioFormatReaderSource> readerSource; 
    juce::ResamplingAudioSource resampleSource{&transportSource, false, 2};
    PlayerState state;


    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (Player)
};