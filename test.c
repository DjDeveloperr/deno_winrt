#include <Windows.h>
#include <stdio.h>
#include <objbase.h>
#include <combaseapi.h>

GUID CLSID_FileOpenDialog = { 0xDC1C5A9C, 0xE88A, 0x4DDE, 0xA5, 0xA1, 0x60, 0xF8, 0x54, 0x15, 0x6B, 0x84 };
GUID IID_IFileOpenDialog = { 0xD57C7288, 0xD4AD, 0x4768, 0xBE, 0x02, 0xBA, 0xD1, 0x00, 0x00, 0x00, 0x00 };

int main() {
  printf("Hello World!\n");

  HRESULT hr;

  hr = CoInitializeEx(NULL, COINIT_APARTMENTTHREADED | COINIT_DISABLE_OLE1DDE);

  if (FAILED(hr)) {
    printf("CoInitializeEx failed: %x\n", hr);
    return 1;
  }

  void* dialog = NULL;
  hr = CoCreateInstance(
    &CLSID_FileOpenDialog,
    NULL,
    CLSCTX_INPROC_SERVER,
    &IID_IFileOpenDialog,
    &dialog
  );

  if (FAILED(hr)) {
    printf("IFileOpenDialog failed: %x\n", hr);
  }

  printf("Bye World!\n");

  return 0;
}
