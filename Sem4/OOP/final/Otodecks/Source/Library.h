/*
  ==============================================================================

    Library.h
    Created: 4 Feb 2022 12:00:01pm
    Author:  eosdu

  ==============================================================================
*/

#pragma once

#include <JuceHeader.h>
#include "FileBrowser.h"

//==============================================================================
/*
*/
class Library  : public juce::Component,
                    public juce::FileBrowserListener,
                    public juce::TableListBoxModel,
                    public juce::DragAndDropContainer,
                    public juce::FileDragAndDropTarget
{
public:
    Library(FileBrowser*, juce::AudioFormatManager&);
    ~Library() override;

    void paint (juce::Graphics&) override;
    void resized() override;

    // Get selected track
    const juce::XmlElement* getSelected() const;

    // Get track from the selected row
    const juce::File getSelectedTrack() const;

    // Get track name from the selected row
    const juce::String getSelectedName() const;

    // Get track BPM from the selected row
    const double getSelectedBPM() const;


private:

    // Inherited from the base class FileBrowserListener
    virtual void selectionChanged() override;
    virtual void fileClicked(const juce::File& file, const juce::MouseEvent& e) override;
    virtual void fileDoubleClicked(const juce::File& file) override;
    virtual void browserRootChanged(const juce::File& newRoot) override;

    //===================================================================

    // Inherited from the base class TableListBoxModel
    virtual int getNumRows() override;
    virtual void paintRowBackground(juce::Graphics&, 
                                    int rowNumber, 
                                    int width, 
                                    int height, 
                                    bool rowIsSelected) override;
    virtual void paintCell(juce::Graphics&, 
                            int rowNumber, 
                            int columnId, 
                            int width, 
                            int height, 
                            bool rowIsSelected) override;

    // This callback is made when the user clicks on one of the cells in the table
    virtual void cellClicked(int rowNumber, int columnId, const juce::MouseEvent&);

    // This callback is made when the table's sort order is changed        
    virtual void sortOrderChanged(int newSortColumnId, bool isForwards);

    // Override this to be informed when the delete key 
    virtual void deleteKeyPressed(int lastRowSelected);
      
    // To allow rows from your table to be dragged - and -dropped, implement this method
    virtual juce::var getDragSourceDescription(const juce::SparseSet< int >& currentlySelectedRows);

    // This is used to create or update a custom component to go in a cell
    virtual juce::Component* refreshComponentForCell(int rowNumber,
                                                int columnId,
                                                bool isRowSelected,
                                                Component* existingComponentToUpdate) override;

    // Override this to be informed when rows are selected or deselected
    virtual void selectedRowsChanged(int lastRowSelected) override;


    //===================================================================

    // Comparator class used to sort data in table 
    // (from the WidgetsDemo from the base JUCE demo collection, adapted)
    class DemoDataSorter
    {
    public:
        DemoDataSorter(const juce::String& attributeToSortBy, bool forwards)
                        : attributeToSort(attributeToSortBy),
                          direction(forwards ? 1 : -1)
        {
        }

        int compareElements(juce::XmlElement* first, juce::XmlElement* second) const
        {
            auto result = first->getStringAttribute(attributeToSort)
                .compareNatural(second->getStringAttribute(attributeToSort));

            if (result == 0)
                result = first->getStringAttribute("ID")
                .compareNatural(second->getStringAttribute("ID"));

            return direction * result;
        }

    private:
        juce::String attributeToSort;
        int direction;
    };

    // This is a custom Label component, which we use for the table's editable text columns.
    // (Based on the WidgetsDemo from the base JUCE demo collection, adapted to handle drag and drop)
    class EditableTextCustomComponent : public juce::Label,
                                        public juce::DragAndDropContainer
    {
    public:
        EditableTextCustomComponent(Library& td ) : owner(td)
        {
            // double click to edit the label text; single click handled below
            setEditable(false, true, false);
        }

        // Single click callback
        void mouseDown(const juce::MouseEvent& event) override
        {
            // single click on the label should simply select the row
            owner.libTable.selectRowsBasedOnModifierKeys(row, event.mods, false);

            Label::mouseDown(event);

            // Start drag and drop passing track information
            dragTrack();
        }

        // Function to drag track based on the element
        void dragTrack()
        {

            // Prepare result array
            juce::StringArray res{};

            // Entry shortcut
            juce::XmlElement* entry = owner.visibleEntries[row];

            // Add URL to the result
            res.add(entry->getStringAttribute("URL"));

            // Add name to the result
            res.add(entry->getStringAttribute("Track"));

            // BPM stored OR "default" value
            const juce::String BPM = entry->getStringAttribute("BPM").getDoubleValue() > 0 ?
                                                          entry->getStringAttribute("BPM") :
                                                          "0.0";

            // Add bpm to the result
            res.add(BPM);

            // On click start drag and drop, dragging file URL
            startDragging(res,
                this,
                juce::ScaledImage{},
                true);
        }

        void textWasEdited() override
        {
            owner.setText(columnId, row, getText());
        }

        // Our demo code will call this when we may need to update our contents
        void setRowAndColumn(const int newRow, const int newColumn)
        {
            row = newRow;
            columnId = newColumn;
            setText(owner.getText(columnId, row), juce::dontSendNotification);
        }

        void paint(juce::Graphics& g) override
        {
            auto& lf = getLookAndFeel();
            if (!dynamic_cast<juce::LookAndFeel_V4*> (&lf))
                lf.setColour(textColourId, juce::Colours::black);

            Label::paint(g);
        }

    private:
        Library& owner;
        int row, columnId;
        juce::Colour textColour;
    };

    // Helper functin to get current value from the selected cell
    juce::String getText(const int columnNumber, const int rowNumber) const;

    // Helper functin to set new value to the selected cell
    void setText(const int columnNumber, const int rowNumber, const juce::String& newText);

    //===================================================================

    // Inherited from the base class FileDragAndDropTarget
    
    // Callback to check whether this target is interested in the set of files being offered
    virtual bool isInterestedInFileDrag(const juce::StringArray& files) override;

    // Callback to indicate that the user has dropped the files onto this component
    virtual void filesDropped(const juce::StringArray& files, int x, int y) override;

    //===================================================================


    // Open file callback
    void loadLibFile(juce::File& libFile);
    
    // Save file callback
    void saveLibFile(juce::File& libFile);

    // Setup XML library template 
    void libTemplate(juce::XmlElement* emptyLib);

    // Add file from the file tree to the library
    void addTrackToLib(const juce::File& file);

    // Make XML entry to the current library
    void makeLibEntry(const juce::StringArray params);

    // Update XML entry from the current library
    void updateLibEntry(const int columnNumber, 
                        const int rowNumber, 
                        const juce::String& newText);

    // Delete XML entry from the current library
    void deleteLibEntry(const int rowNumber);

    // Update library ID order
    void orderLibID() const;

    // Helper function to get attribute name based on the passed column number
    juce::String getColName(const int columnNumber) const;

    // Update visible lib entries
    void updateVisible();

    // Find lib entry ID based on the visble entry ID
    const int getAbsID(const int visibleID) const;

    // Get metadata
    juce::StringPairArray getMetadata(juce::File);

    // Callback functions for interface elements
    void loadLibClick();
    void saveLibClick();
    void addTrackClick();
    void delTrackClick();
    void searchChange();
    void clearSearch();

    //===================================================================

    // File browser component
    FileBrowser* fileBrowser;

    // Library table component
    juce::TableListBox libTable;
    // Library table font
    juce::Font tableFont{ 12.0f };

    // Current library xml
    juce::XmlElement curLibrary{ "OTODECKS_LIBRARY" };

    // Visible library entries
    juce::Array<juce::XmlElement*> visibleEntries;

    // Library structure xml element
    juce::XmlElement* libStructure = nullptr;
    // Library entries xml element
    juce::XmlElement* libEntries = nullptr;

    // Library interface
    juce::TextButton loadLibBtn{ "Load library" };
    juce::TextButton saveLibBtn{ "Save library" };
    juce::TextButton addTrackBtn{ "Add track" };
    juce::TextButton delTrackBtn{ "Del track" };
    juce::TextEditor searchField{ "Search field" };

    juce::Label searchLabel{ "Search", "Filter:" };
    juce::TextButton clearSearchBtn{ "X" };

    // File chooser for library interactions
    std::unique_ptr<juce::FileChooser> fileChooserPtr = nullptr;

    // Shared format manager
    juce::AudioFormatManager& formatManager;

    JUCE_DECLARE_NON_COPYABLE_WITH_LEAK_DETECTOR (Library)
};
